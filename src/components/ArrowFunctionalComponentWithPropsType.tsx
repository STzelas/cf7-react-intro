/**
 * Στα props είναι πολύ σημαντικό
 * να δηλώνουμε τον τύπο!!!
 * Το title θα το δηλώσουμε
 * μέσα στο App.tsx
 */

type A = {
    title: string;
}

type B = {
    description: string;
}

type MergedProps = A & B;

// type Props = {
//     title: string;
//     description: string;
// }

// Το interface τα κανει merge αυτοματα, οχι οπως πανω
// interface Props {
//     title: string;
// }
//
// interface Props {
//     description: string;
// }

const ArrowFunctionalComponentWithProps = ({title, description}:MergedProps) => {
    return (
        <>
            <h1 className={"text-center text-xl font-bold mt-12"}>{title}</h1>
            <p className={"text-center text-xl font-bold mt-12 text-gray-800"}>{description}</p>
        </>
    )

}

export default ArrowFunctionalComponentWithProps;