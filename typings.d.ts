

type Base ={ 
    _id:string;
    _createdAt:string;
    _updatedAt:string;
    _rev:string;
}

export interface Post extends Base{
    author:Author;
    mainImage?:MainImage;
    body:Block[];
    categories:Category[];
    title : string;
    slug : Slug;
    description:string;
}

interface Author{
    _type : "author";
    name : string;
    image : Image;
}
interface Image{
    _type : "image";
    asset : Reference;
}

interface Reference{
    _ref : "string";
    _type : "reference";
}

interface Slug{
    _type : "slug";
    current : "string";
}

interface Block{
    _key : string;
    _type : "block";
    children : Span[];
    markdefs : any[];
    style : "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span{
    _key : string;
    _type : "span";
    marks : string[];
    text:string;
}

interface Category extends Base{
    _type : "category";
    description : string;
    title : string;
}

interface MainImage{
    _type : "image";
    asset : Reference;
}

interface Title{
    _type : "string";
    current : string;
}