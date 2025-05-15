export default function MetaData({ data, setData, sectionTitle }) {
	return (
		<>
			<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
				<legend className="fieldset-legend">{sectionTitle}</legend>

				<label className="name">Name</label>
				<input
					type="text"
					className="input"
					placeholder="John"
					onChange={(e) => {
						setData({ ...data, name: e.target.value });
					}}
				/>

				<label className="role">Role</label>
				<input
					type="text"
					className="input"
					placeholder="cloud engineer"
					onChange={(e) => {
						setData({ ...data, role: e.target.value });
					}}
				/>

				<label className="role">Location</label>
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
					placeholder="Tashkent"
					onChange={(e) => {
						setData({ ...data, email: e.target.value });
					}}
				/>

				<label className="role">phone</label>
				<input
					type="text"
					className="input"
					placeholder="Tashkent"
					onChange={(e) => {
						setData({ ...data, phone: e.target.value });
					}}
				/>

				<label className="role">Website</label>
				<input
					type="text"
					className="input"
					placeholder="Tashkent"
					onChange={(e) => {
						setData({ ...data, website: e.target.value });
					}}
				/>
			</fieldset>
		</>
	);
}
