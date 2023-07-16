import { NextRequest, NextResponse } from 'next/server'

const data = {
  "ddd": "dkdkdk"
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const GET = async (request: NextRequest) => {
  //fetch
  try{
  
    return new NextResponse(JSON.stringify(data)); 
  }catch(err){
    return new NextResponse("Database Error", {headers:corsHeaders});
  }
}