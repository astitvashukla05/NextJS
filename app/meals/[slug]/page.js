import classes from './page.module.css';
import Image from 'next/image';

import { getMealDetail } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function mealDetailPage({params}) {
    const { slug } = await params;
    const meal= await getMealDetail(slug);
    if(!meal){
        notFound()
        
    }
      meal.instrucction= meal.instructions.replace(/\n/g, '<br/>');
    return (
    <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
               <p>{meal.title}</p>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mail to ${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main className={classes.main}>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instrucction}}>

            </p>
        </main>
        
    </>
    )

}