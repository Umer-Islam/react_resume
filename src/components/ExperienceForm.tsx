
export default function ExperienceForm({ data, setData, sectionTitle }) {
    return (
        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Experience 1</legend>

                <label className="name">title</label>
                <input
                    type="text"
                    className="input"
                    placeholder="John"
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                    }}
                />

                <label className="role">Company</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Alphabet Ltd"
                    onChange={(e) => {
                        setData({ ...data, role: e.target.value });
                    }}
                />

                <label className="role">Summary</label>
                <input
                    type="text"
                    className="input"
                    placeholder="Tashkent"
                    onChange={(e) => {
                        setData({ ...data, location: e.target.value });
                    }}
                />

                <label className="role">email</label>
                <input
                    type="text"
                    className="input"
                    placeholder="john@gmail.com"
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                    }}
                />

                <label className="role">phone</label>
                <input
                    type="text"
                    className="input"
                    placeholder="+1 123 456 1234"
                    onChange={(e) => {
                        setData({ ...data, phone: e.target.value });
                    }}
                />

                <label className="role">Website</label>
                <input
                    type="text"
                    className="input"
                    placeholder="linkedin.com/john-doe"
                    onChange={(e) => {
                        setData({ ...data, website: e.target.value });
                    }}
                />
            </fieldset>
        </>
    );
}
