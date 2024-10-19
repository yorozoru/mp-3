import { useEffect } from "react";

export default function useTitleChanger(page: string) {
    useEffect(() => {
        document.title = `Resume | ${page}`;
    }, [page]); 
}
