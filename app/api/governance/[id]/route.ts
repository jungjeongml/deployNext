import { NextRequest, NextResponse } from 'next/server'
const db = require("../../../../common/config/db")

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


let queryString

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, { headers: corsHeaders });
}

const queryPromise = (queryString: string) => {
	return new Promise((resolve, reject) => {  
		db.query(queryString, (error: any, results: any) => {  
			if (error) {  
				return reject(error);  
			}  
			resolve(results);  
		});  
	});  
}  

export const GET = async (req:NextRequest, {params}: {params: {id: number}}) => {
  try{
    queryString = `SELECT * FROM governance WHERE id=${params.id}`  
    const rows = await queryPromise(queryString)
    return NextResponse.json(rows, {headers:corsHeaders})
  } catch(e){
    console.error(e)
  }
}

export const POST = async (req:NextRequest, {params}: {params: {id: number}}) => {
  try{
    queryString = `SELECT * FROM governance WHERE id=${params.id}`  
    const rows = await queryPromise(queryString)
    return NextResponse.json(rows, {headers:corsHeaders})
  } catch(e){
    console.error(e)
  }
}