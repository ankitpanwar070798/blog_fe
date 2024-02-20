"use client"
import { LoadingIcon } from "@/constants/svg";

const LoadingScreen = () => {

    return (
        <div>
            <div className='loadingState'>
                <div className={'main-content'}>
                    <div className={'rotate-loading'}>
                        <LoadingIcon />
                    </div>
                    <p className='title-loading'>Loading...</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;