import z from 'zod';

//1.运行时数据检查
//使用Zod定义Response 的schema
const ResponseSchema = z.object({
  name: z.string(),
  age: z.number(),
});

try {
    ResponseSchema.parse({
        name:"aaa",
        age:18
    });
}catch (error) {
    if (error instanceof z.ZodError) {
        console.log(error.issues);
    }
}

//2.

export const ZodDemo = () => {
  return <div>ZodDemo</div>;
};