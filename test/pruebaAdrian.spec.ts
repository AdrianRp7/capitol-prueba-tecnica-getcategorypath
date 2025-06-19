import { Category, getCategoryPath } from "../PruebaAdrian";

describe("Test getCategoryPath", ()=>{
    const categories: Category[] = [
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
        name: 'category4',
        subcategories: [
            {
                name: 'category4',
                subcategories: []
            },
            {
                name: 'category2',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    },
                ]
            },
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];
    test("Should return Not Found categoryName when the object doesn't have the category", ()=> {
        const categoryToSearch = "category10";
        
        const result: string = getCategoryPath(categories, categoryToSearch);

        expect(result).toEqual(`Not found ${categoryToSearch}`);
    })

    test("Should return the path when the object has the category", ()=>{
        const categoryToSearch = "category5";
        const resultExpected = `/category5`;
        
        const result: string = getCategoryPath(categories, categoryToSearch);

        expect(result).toEqual(resultExpected);
    })

    test("Should return the path when the object has the category and the category searched is in a subcategory", ()=>{
        const categoryToSearch = "category3";
        const resultExpected = `/category1/category3`;
        
        const result: string = getCategoryPath(categories, categoryToSearch);

        expect(result).toEqual(resultExpected);
    })

    test("Should return the list of path when the object has the category multiple times", ()=> {
        const categoryToSearch = "category4";
        const resultExpected = `/category1/category3/category4,\n/category4/category4,\n/category4/category2/category4,\n/category4`
        
        const result: string = getCategoryPath(categories, categoryToSearch);

        expect(result).toEqual(resultExpected);
    })
})