'use client';
import { useFormStatus } from "react-dom";
export default function buttonStatus({type}) {
    const {pending} = useFormStatus();
    return(
        <button disabled={pending} type={type}>{pending?'Uploading...' : 'Share Meal' }</button>
    )

}