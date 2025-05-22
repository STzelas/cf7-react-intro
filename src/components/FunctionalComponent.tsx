/**
 * Functional Component
 */
function FunctionalComponent() {
    const title: string = "Is a Functional Component"   // ts οπότε και τύπο / μπορώ και :any
    return <h1 className={"text-center mt-12 text-xl font-semibold"}>{title}</h1>
}

export default FunctionalComponent