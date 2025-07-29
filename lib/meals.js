import sql from 'better-sqlite3';
import fs from 'node:fs'
const db= sql('meals.db');
import slugify from 'slugify';
import xss from 'xss';

export default async function getMeals(){
    await new Promise(resolve => setTimeout(resolve, 2000));
   const meals=await db.prepare('SELECT * FROM meals').all()
   return meals
}
export async function getMealDetail(slug){
    const meal=await db.prepare('SELECT * FROM meals where slug= ?').get(slug)
    return meal
}
export  async function saveMeal(meal){
    meal.slug=slugify(meal.title,{lower:true})
    const extenstion=meal.image.name.split('.').pop()
    const fileName=`${meal.slug}.${extenstion}`
    meal.instructuions=xss(meal.instructions)

    const stream= fs.createWriteStream(`pu blic/images/${fileName}`)
    const bufferedImage=await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage),(err)=>{if(err){
        throw new Error('Error writing image file')
    }}) 
    meal.image=`/images/${fileName}`
    db.prepare('INSERT INTO meals (title,slug,image,summary,instructions,creator,creator_email) VALUES (?,?,?,?,?,?,?)').run( meal.title,
  meal.slug,
  meal.image,
  meal.summary,
  meal.instructions,
  meal.creator,
  meal.creator_email)

}