import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const SocialLogin = () => {
  const socialLogin = (action: string) => {
    // setIsLoading(true);

    signIn(action, {
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }
      if (callback?.ok && !callback?.error) {
        toast.success("Logged in");
      }
    });
    // .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <hr className="my-5 bg-black" />
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Button
          className="w-60 md:w-auto px-6 py-2 text-xl"
          onClick={() => socialLogin("google")}
          startContent={<FaGoogle />}
          radius="sm"
          color="warning"
          variant="ghost"
        >
          Google
        </Button>
        <Button
          className="w-60 md:w-auto my-3 px-6 py-2 text-xl"
          onClick={() => socialLogin("facebook")}
          startContent={<FaFacebook />}
          radius="sm"
          color="warning"
          variant="ghost"
          disabled={true}
        >
          Facebook
        </Button>
        <Button
          className="w-60 md:w-auto px-6 py-2 text-xl"
          onClick={() => socialLogin("instagram")}
          startContent={<RiInstagramFill />}
          radius="sm"
          color="warning"
          variant="ghost"
          disabled={true}
        >
          Instagram
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
