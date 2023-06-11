
import { Button } from "@mui/material";
import NavPage from "./NavPage";
import ResponsiveAppBar from "../components/NavBar";
export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return (
        <>
            <ResponsiveAppBar/>
            <NavPage/>
        </>
        )
}