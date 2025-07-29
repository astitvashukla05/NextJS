'use client';
import { useRef,useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({name,label = 'Meal Image'}) {
    const [pickedImage, setPickedImage] = useState();
    const inputSel=useRef();
    function handleClick(){
        inputSel.current.click();
    }
     function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);

    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked Yet</p>}
                    {pickedImage && <Image src={pickedImage} fill alt='Picked Image' />}
                </div>
                <input type="file" id={name} name={name} accept="image/png, image/jpeg" required className={classes.input} ref={inputSel} onChange={handleImageChange} />
            </div>
            <button type="button" className={classes.button} onClick={handleClick}>Select Image</button>

        </div>    )
}