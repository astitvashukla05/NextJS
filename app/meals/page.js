import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';

import getMeals from '@/lib/meals';
import Meals from '../components/meals/Meals';

async function MealsDeatils() {
  const meals = await getMeals();

  return <Meals meals={meals}/>
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
        <MealsDeatils/>
        </Suspense>
      </main>
    </>
  );
}