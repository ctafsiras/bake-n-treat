"use client";

import { columns, roleOptions } from "@/app/utils/data";
import {
	Button,
	Chip,
	ChipProps,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Pagination,
	Selection,
	SortDescriptor,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	User,
} from "@nextui-org/react";
import { User as UserType } from "@prisma/client";
import axios from "axios";
import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

const roleColorMap: Record<string, ChipProps["color"]> = {
	admin: "success",
	user: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "email", "role", "actions"];

const Users = () => {
	const [filterValue, setFilterValue] = React.useState("");
	const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
		new Set([])
	);
	const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [roleFilter, setRoleFilter] = React.useState<Selection>("all");
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
		column: "age",
		direction: "ascending",
	});
	const [page, setPage] = React.useState(1);
	const [users, setUsers] = React.useState<UserType[]>([]);

	// Fetch users
	useEffect(() => {
		axios.get("/api/users").then((data) => {
			setUsers(data.data);
		});
	}, []);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredUsers = [...users];

		if (hasSearchFilter) {
			filteredUsers = filteredUsers.filter((user) =>
				user.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}
		if (
			roleFilter !== "all" &&
			Array.from(roleFilter).length !== roleOptions.length
		) {
			filteredUsers = filteredUsers.filter((user) =>
				Array.from(roleFilter).includes(user.role)
			);
		}

		return filteredUsers;
	}, [filterValue, roleFilter, hasSearchFilter, users]);

	const capitalize = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);
	const sortedItems = React.useMemo(() => {
		return [...items].sort((a: UserType, b: UserType) => {
			const first = a[sortDescriptor.column as keyof UserType] as string;
			const second = b[sortDescriptor.column as keyof UserType] as string;
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === "descending" ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const renderCell = React.useCallback(
		(user: UserType, columnKey: React.Key) => {
			const cellValue = user[columnKey as keyof UserType];

			switch (columnKey) {
				case "name":
					return (
						<User
							avatarProps={{ radius: "lg", src: user.image }}
							description={user.email}
							name={capitalize(user.name)}
						></User>
					);
				case "role":
					return (
						<Chip
							className="capitalize"
							color={roleColorMap[user.role]}
							size="sm"
							variant="flat"
						>
							{capitalize(user.role)}
						</Chip>
					);
				case "actions":
					return (
						<div className="flex justify-center items-center gap-2">
							<Dropdown>
								<DropdownTrigger>
									<Button
										isIconOnly
										size="md"
										variant="ghost"
									>
										<FaEllipsisVertical className="text-black" />
									</Button>
								</DropdownTrigger>
								<DropdownMenu>
									<DropdownItem color="primary">
										View
									</DropdownItem>
									<DropdownItem color="warning">
										Edit
									</DropdownItem>
									<DropdownItem color="danger">
										Delete
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					);
				default:
					if (cellValue instanceof Date) {
						return cellValue.toLocaleString();
					}

					return cellValue;
			}
		},
		[]
	);
	const onRowsPerPageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			setRowsPerPage(Number(e.target.value));
			setPage(1);
		},
		[]
	);
	const onSearchChange = React.useCallback((value?: string) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);
	const onClear = React.useCallback(() => {
		setFilterValue("");
		setPage(1);
	}, []);

	const topContent = React.useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-3 items-end">
					<Input
						isClearable
						className="w-full sm:max-w-[44%]"
						placeholder="Search by name..."
						startContent={<CiSearch />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
					/>
					<div className="flex gap-3">
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={
										<FaChevronDown className="text-small" />
									}
									variant="flat"
								>
									Role
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={roleFilter}
								selectionMode="multiple"
								onSelectionChange={setRoleFilter}
							>
								{roleOptions.map((role) => (
									<DropdownItem
										key={role.uid}
										className="capitalize"
									>
										{capitalize(role.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={
										<FaChevronDown className="text-small" />
									}
									variant="flat"
								>
									Columns
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode="multiple"
								onSelectionChange={setVisibleColumns}
							>
								{columns.map((column) => (
									<DropdownItem
										key={column.uid}
										className="capitalize"
									>
										{capitalize(column.name)}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-default-400 text-small">
						Total {users.length} users
					</span>
					<label className="flex items-center text-default-400 text-small">
						Rows per page:
						<select
							className="bg-transparent outline-none text-default-400 text-small"
							onChange={onRowsPerPageChange}
						>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		roleFilter,
		visibleColumns,
		onSearchChange,
		onRowsPerPageChange,
		onClear,
		users.length,
	]);
	const bottomContent = React.useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<span className="w-[30%] text-small text-default-400">
					{selectedKeys === "all"
						? "All items selected"
						: `${selectedKeys.size} of ${filteredItems.length} selected`}
				</span>
				<Pagination
					isCompact
					showControls
					showShadow
					color="primary"
					page={page}
					total={pages}
					onChange={setPage}
				/>
			</div>
		);
	}, [selectedKeys, page, pages, filteredItems.length]);

	return (
		<Table
			aria-label="Example table with custom cells, pagination and sorting"
			isHeaderSticky
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			classNames={{
				wrapper: "max-h-[382px]",
			}}
			selectedKeys={selectedKeys}
			selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}
						allowsSorting={column.sortable}
					>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody
				emptyContent={"No users found"}
				items={sortedItems}
			>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};
export default Users;
