import prisma from "@lib/prisma";


// Optional fields in body: content
export async function POST(req) {
  const res = await req.json();
  const { inputTitle, inputDescription } = res;
  console.log(res)
  
  const result = await prisma.todo.create({
    data: {
      title: inputTitle,
      description: inputDescription,
      published: true,
    }
  })
  return res.json(result)
}