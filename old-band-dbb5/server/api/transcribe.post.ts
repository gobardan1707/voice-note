
import { defineEventHandler, readFormData, createError } from 'h3'




export default defineEventHandler(async (event) =>{

const {cloudflare}=event.context;

const form =await readFormData(event);
const blob = form.get('audio') as Blob;

if(!blob){

    throw createError({

        statusCode:400,
        message:"missing audio blob to transcribe",
    });
}


});