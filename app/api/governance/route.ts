import { NextRequest, NextResponse } from 'next/server'
const db = require("../../../common/config/db")

 const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


let queryString;

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

export const GET = async (req:NextRequest, res:NextResponse) => {
  try{
    // queryString = `SELECT * FROM governance ORDER BY id DESC`  
    // const rows = await queryPromise(queryString)
    // console.log('rows::', rows)
    return NextResponse.json({ddd:"ddd"}, {headers:corsHeaders})
  } catch(e){
    console.error(e)
  }
}

export const POST = async (req:NextRequest) => {
  try{
    const res = await req.json()
    console.log(res)
    const query = db.query(`INSERT INTO governance (subject, content) VALUES ("${res.subject}", "${res.content}")`)
    console.log(query)
    return NextResponse.json(res, {headers:corsHeaders})
  }catch(e){
    console.error(e);
  }
}