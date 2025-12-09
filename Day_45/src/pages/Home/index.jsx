import { useDevicesQuery, useMeQuery } from "@/services/auth";
import React from "react";

function Home() {
    const { isSuccess, data: currentUser } = useMeQuery();
    const { data: devices } = useDevicesQuery();
    console.log(devices);

    return <div>{isSuccess && <h2>Xin chào {currentUser.firstName}</h2>}</div>;
}

export default Home;
