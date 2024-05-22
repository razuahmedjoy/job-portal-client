import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "@material-tailwind/html",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "@material-tailwind/react",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Material Tailwind PRO",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];



// nav list component
const navListItems = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Jobs",
        path: "/jobs"
    },
    {
        label: "Candidates",
        path: "/cadidates"
    },
    {
        label: "Employers",
        path: "/employers"
    },
    {
        label: "Blogs",
        path: "/blogs"
    },
    {
        label: "Contact Us",
        path: "/contact-us"
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

            {navListItems.map(({ label, path }, key) => (
                <Link
                    to={path}
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-white"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">

                        <span className="text-white"> {label}</span>
                    </MenuItem>
                </Link>
            ))}
        </ul>
    );
}
const NavbarComponent = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <nav className="absolute w-full top-0 left-0 right-0 z-50 bg-transparent blur-0 mx-auto max-w-screen-xl p-2 rounded-none shadow-none py-4 border-nonebackdrop:blur-none lg:px-2">
            <div className="relative mx-auto flex items-center justify-between text-white">


                <img className="w-24 md:w-28 cursor-pointer" src="https://cloudshee.com.au/wp-content/uploads/2021/04/cloudshee_logo__1_-removebg-preview-e1713522799179.png" alt="" />
                <div className="hidden lg:block lg:ml-auto">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>



                <Link className="lg:ml-auto ml-5" size="sm" variant="text">
                    <span>Login/ Register</span>
                </Link>
                <ProfileMenu />
                <Link className="ml-2 text-black  hover:text-primary duration-300">
                    <button className="bg-white py-2 px-4 rounded">
                        <span>Add Job</span>
                    </button>
                </Link>
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll bg-black">
                <NavList />
            </MobileNav>
        </nav>
    );
}

export default NavbarComponent