'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

const CANVAS_SIZE = 400
const GRID_SIZE = 20
const CELL_SIZE = CANVAS_SIZE / GRID_SIZE

enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}

interface SnakePart {
  x: number
  y: number
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [snake, setSnake] = useState<SnakePart[]>([{ x: 10, y: 10 }])
  const [food, setFood] = useState<SnakePart>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Direction>(Direction.RIGHT)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isMicOn, setIsMicOn] = useState(false)
  const [micPermission, setMicPermission] = useState<PermissionState | null>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [message, setMessage] = useState("Click 'Turn On Mic' to start")
  const [subtitle, setSubtitle] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const microphoneStreamRef = useRef<MediaStream | null>(null)
  const shouldRestartRecognition = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (ctx) {
      ctx.setTransform(CELL_SIZE, 0, 0, CELL_SIZE, 0, 0)
    }

    const moveSnake = () => {
      if (gameOver || !gameStarted) return

      const newSnake = [...snake]
      const head = { ...newSnake[0] }

      switch (direction) {
        case Direction.UP:
          head.y -= 1
          break
        case Direction.RIGHT:
          head.x += 1
          break
        case Direction.DOWN:
          head.y += 1
          break
        case Direction.LEFT:
          head.x -= 1
          break
      }

      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        return
      }

      newSnake.unshift(head)

      if (head.x === food.x && head.y === food.y) {
        setScore(prevScore => prevScore + 1)
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        })
      } else {
        newSnake.pop()
      }

      setSnake(newSnake)
    }

    const gameLoop = setInterval(moveSnake, 100)

    return () => clearInterval(gameLoop)
  }, [snake, direction, food, gameOver, gameStarted])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (ctx) {
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, GRID_SIZE, GRID_SIZE)

      if (gameStarted) {
        ctx.fillStyle = '#39FF14'
        snake.forEach(({ x, y }) => ctx.fillRect(x, y, 1, 1))

        ctx.fillStyle = '#FF00FF'
        ctx.fillRect(food.x, food.y, 1, 1)
      } else {
        ctx.fillStyle = '#FFFF00'
        ctx.font = '0.8px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Say "START" to begin', GRID_SIZE / 2, GRID_SIZE / 2)
      }
    }
  }, [snake, food, gameStarted])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return

      switch (e.key) {
        case 'ArrowUp':
          setDirection(Direction.UP)
          break
        case 'ArrowRight':
          setDirection(Direction.RIGHT)
          break
        case 'ArrowDown':
          setDirection(Direction.DOWN)
          break
        case 'ArrowLeft':
          setDirection(Direction.LEFT)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameStarted])

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    
    navigator.permissions.query({ name: 'microphone' as PermissionName }).then((result) => {
      setMicPermission(result.state)
    })

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if (isMicOn && micPermission === 'granted') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (!SpeechRecognition) {
        setMessage("Speech recognition not supported in this browser.")
        return
      }

      const startRecognition = () => {
        recognitionRef.current = new SpeechRecognition()

        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true
        recognitionRef.current.lang = 'en-US'

        recognitionRef.current.onstart = () => {
          setIsListening(true)
          setMessage("Listening... Say 'START' to begin the game.")
        }

        recognitionRef.current.onend = () => {
          if (shouldRestartRecognition.current) {
            startRecognition()
          } else {
            setIsListening(false)
            setMessage("Voice recognition ended. Click 'Turn On Mic' to restart.")
          }
        }

        recognitionRef.current.onerror = (event) => {
          console.error('Speech recognition error', event.error)
          if (event.error === 'no-speech') {
            startRecognition()
          } else {
            setMessage(`Error: ${event.error}. Please try again.`)
            setIsListening(false)
          }
        }

        recognitionRef.current.onresult = (event) => {
          const last = event.results.length - 1
          const transcript = event.results[last][0].transcript.trim().toUpperCase()

          console.log('Transcript:', transcript)

          setSubtitle(transcript)

          if (!gameStarted && transcript === 'START') {
            setGameStarted(true)
            setMessage("Game started! Say 'UP', 'DOWN', 'LEFT' or 'RIGHT' to control the snake.")
          } else if (gameStarted) {
            switch (transcript) {
              case 'UP':
                setDirection(Direction.UP)
                break
              case 'RIGHT':
                setDirection(Direction.RIGHT)
                break
              case 'DOWN':
                setDirection(Direction.DOWN)
                break
              case 'LEFT':
                setDirection(Direction.LEFT)
                break
            }
          }
        }

        try {
          recognitionRef.current.start()
        } catch (error) {
          console.error('Error starting speech recognition:', error)
          setMessage("Error starting speech recognition. Please try again.")
        }
      }

      shouldRestartRecognition.current = true
      startRecognition()

      return () => {
        shouldRestartRecognition.current = false
        if (recognitionRef.current) {
          recognitionRef.current.stop()
        }
      }
    }
  }, [isMicOn, micPermission, gameStarted])

  useEffect(() => {
    if (isMicOn && micPermission === 'granted') {
      const audioContext = audioContextRef.current!
      const analyser = audioContext.createAnalyser()
      analyserRef.current = analyser
      analyser.fftSize = 256

      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          microphoneStreamRef.current = stream
          const source = audioContext.createMediaStreamSource(stream)
          source.connect(analyser)

          const checkAudioLevel = () => {
            const dataArray = new Uint8Array(analyser.frequencyBinCount)
            analyser.getByteFrequencyData(dataArray)
            const average = dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length
            setAudioLevel(average)

            requestAnimationFrame(checkAudioLevel)
          }

          checkAudioLevel()
        })
        .catch(err => {
          console.error('Error accessing microphone:', err)
          setMessage("Error accessing microphone. Please check your settings and try again.")
        })

      return () => {
        if (microphoneStreamRef.current) {
          microphoneStreamRef.current.getTracks().forEach(track => track.stop())
        }
      }
    }
  }, [isMicOn, micPermission])

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach(track => track.stop())
      setMicPermission('granted')
      setIsMicOn(true)
      setMessage("Microphone is on. Say 'START' to begin the game.")
    } catch (err) {
      console.error('Error accessing microphone:', err)
      setMicPermission('denied')
      setMessage("Microphone permission denied. Please allow microphone access and try again.")
    }
  }

  const toggleMicrophone = () => {
    if (micPermission !== 'granted') {
      requestMicrophonePermission()
    } else {
      setIsMicOn(!isMicOn)
      if (!isMicOn) {
        shouldRestartRecognition.current = true
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume()
        }
        setMessage("Microphone is on. Say 'START' to begin the game.")
      } else {
        shouldRestartRecognition.current = false
        setMessage("Microphone turned off")
        setSubtitle("")
        setIsListening(false)
        if (recognitionRef.current) {
          recognitionRef.current.stop()
        }
        if (microphoneStreamRef.current) {
          microphoneStreamRef.current.getTracks().forEach(track => track.stop())
        }
      }
    }
  }

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 15, y: 15 })
    setDirection(Direction.RIGHT)
    setGameOver(false)
    setGameStarted(false)
    setScore(0)
    setMessage(isMicOn ? "Say 'START' to begin the game." : "Turn on the microphone to play")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-neon-green animate-pulse">Voice-Controlled Neon Snake</h1>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="border-4 border-neon-purple rounded-lg shadow-neon"
        />
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-neon-red">Game Over</h2>
              <p className="text-xl mb-4">Score: {score}</p>
              <Button onClick={restartGame} className="bg-neon-blue hover:bg-neon-blue-bright text-black font-bold py-2 px-4 rounded">
                Restart
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center">
        <p className="text-xl mr-4">Score: {score}</p>
        <Button
          onClick={toggleMicrophone}
          className={`${
            isMicOn ? 'bg-neon-red' : 'bg-neon-green'
          } hover:bg-opacity-80 text-black font-bold py-2 px-4 rounded flex items-center`}
        >
          {isMicOn ? <MicOff className="mr-2" /> : <Mic className="mr-2" />}
          {isMicOn ? 'Turn Off Mic' : 'Turn On Mic'}
        </Button>
      </div>
      <p className="mt-2 text-neon-yellow">{message}</p>
      {isMicOn && (
        <div className="mt-4 p-2 bg-gray-800 rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between mb-2">
            <p className="text-neon-blue">
              {isListening ? <Volume2 className="inline mr-2" /> : <VolumeX className="inline mr-2" />}
              {isListening ? "Listening" : "Not Listening"}
            </p>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-neon-green"
                style={{ width: `${(audioLevel / 255) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-neon-blue text-center">{subtitle || "Say something..."}</p>
          <p className="text-xs text-gray-400 mt-2">Debug: {isListening ? 'Listening' : 'Not Listening'}, Mic Permission: {micPermission}</p>
        </div>
      )}
    </div>
  )
}