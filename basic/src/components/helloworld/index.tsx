interface HelloWorldProps{
    title:string;
}

export const HelloWorld = (props :HelloWorldProps) =>{
    const  {title} = props;
    return <div>Hello World {title}</div>;
}