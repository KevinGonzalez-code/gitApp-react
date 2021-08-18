import { useEffect, useState } from "react";
import getGits from '../helpers/getGits';

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {

            getGits(categoria)
                .then(imgs => {

                    setState({
                        data: imgs,
                        loading: false
                    });
                });

        }, 1000);


    }, [categoria]);

    return state;
};

