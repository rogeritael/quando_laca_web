import { useState, useContext } from "react";
import { LoadingContianer } from "./styles";
import { Context } from "@/context/UserContext";

interface loadingProps {

}

export function Loading(props : loadingProps){
    const { isLoading } = useContext(Context);

    return(
        isLoading &&
        <LoadingContianer>
            <h1><span>Quando</span>Lança</h1>
        </LoadingContianer>
    )
}