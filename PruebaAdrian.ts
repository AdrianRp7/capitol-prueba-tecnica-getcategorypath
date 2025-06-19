//Prueba entregada por Adrián Ródenas Picó el día 19/06/2025

interface Category {
    name: string,
    subcategories: Category[],
}

const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    },
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

//Español
//Esta solución, a parte de resolver lo que plantea el ejercicio, también resuelve el problema de cuando una categoría se encuentra en más
//de un lugar, por ejemplo si la categoría 4 esta en otra parte u dentro de la categoría cuatro, en ese caso devuelve un array con todas las ocurrencias
//de esa categoría. Luego devuelve un string con cada ocurrencia separada por comas y "\n". (Debajo hay datos de ejemplo con este caso)

//Inglés
//This solution, besides solving what the exercise proposes, also solves the problem when a category is found in more than one place. 
//For example, if category 4 is elsewhere or within category 4, in that case, it returns an array with all occurrences of that category. 
//Then, it returns a string with each occurrence separated by commas and "\n" (Below are example data for this case)

// TO-DO: Implement this function
const getCategoryPath = (categories: Category[], categoryName: string): string => {
    const getArrayCategoryPaths = (categories: Category[], categoryName: string): string[] => {
        let paths: string[] = [];
        for(let {name, subcategories} of categories) {
            if(subcategories.length > 0) {
                let result: string[] = getArrayCategoryPaths(subcategories, categoryName);
                if(result.length !== 0) {
                    paths.push(...result.map(path => (`/${name}${path}`)))
                }
            }
            if(name === categoryName) {
                paths.push(`/${name}`);
            }
        }
        return paths
    }

    const result: string = getArrayCategoryPaths(categories, categoryName).join(",\n");

    return result.length !== 0 ? result : `Not found ${categoryName}`;
};


export {getCategoryPath, Category}