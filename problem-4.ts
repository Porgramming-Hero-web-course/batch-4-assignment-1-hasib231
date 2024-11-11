{
    type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

// union type Circle and Rectangle
type ShapeType = Circle | Rectangle;

// calculate the area of a shape
function calculateShapeArea(shapeType: ShapeType): number {
    if (shapeType.shape === "circle") {
        return parseFloat((Math.PI * Math.pow(shapeType.radius, 2)).toFixed(2));
    } else if (shapeType.shape === "rectangle") {
        return shapeType.width * shapeType.height;
    }
    return 0;
}

}