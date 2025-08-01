'use client';
import ImagePicker from '@/app/components/meals/image-picker';
import classes from './page.module.css';
import shareMeal from '@/lib/shareMeals';
import ButtonStatus from '@/app/components/meals/meals-button-status';
import { useActionState } from 'react';



export default function ShareMealPage() {
    const [state,formAcion]=useActionState(shareMeal,null)
   
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAcion}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required  defaultValue={state.nameß}/>
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker name="image"/>
          {state?.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <ButtonStatus type="submit" />
          </p>
        </form>
      </main>
    </>
  );
}