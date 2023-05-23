
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="md:w-4/12 m-auto text-center my-6">
            <h4 className="text-yellow-600 pt-10">---{subHeading}---</h4>
            <h2 className="border-y-4 my-3 py-3 text-2xl font-semibold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;