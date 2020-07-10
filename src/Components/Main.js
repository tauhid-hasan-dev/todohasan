import React from "react";
import Column from "./Column";
import "../Styles/style.css";

function Main(props) {
	const { ifClickEvent, ifClickGroup, groups, eventHeader, handleChange, eventContent, eventDate, eventTags, handleSubmit, groupNameInput, addGroup } = props;
	return (
		<main className="main">
			<Column groups={groups} />
			<div>
				<div className={"main-form" + (ifClickGroup ? "-show" : " ")}>
					<label htmlFor="GroupName" className="main-form-show-label">
						Column Name
						<input name="groupNameInput" value={groupNameInput} type="text" onChange={handleChange} className="main-form-show-input" />
					</label>
					<input onClick={addGroup} type="Submit" value={"Add"} className="main-form-show-submit" />
				</div>
				<form className={"main-form" + (ifClickEvent ? "-show" : " ")}>
					<label htmlFor="baslik" className="main-form-show-label">
						Header
						<input name="eventHeader" onChange={handleChange} type="text" className="main-form-show-input" value={eventHeader} />
					</label>
					<label htmlFor="icerik" className="main-form-show-label">
						Description
						<textarea name="eventContent" type="text" className="main-form-show-input" onChange={handleChange} value={eventContent} />
					</label>
					<label htmlFor="tarih" className="main-form-show-label">
						Date
						<input onChange={handleChange} value={eventDate} name="eventDate" type="date" />
					</label>
					<label htmlFor="etiket" className="main-form-show-label">
						Levels
						<select onChange={handleChange} name="eventTags" value={eventTags}>
							<option value="2">Level-01</option>
							<option value="3">Level-02</option>
							<option value="4">Level-03</option>
						</select>
					</label>
					<label htmlFor="group" className="main-form-show-label">
						Grup
						<select onChange={handleChange} name="eventGroupName" className="main-form-show-select">
							{groups.map((val) => {
								return (
									<option key={val.groupId} value={val.groupName}>
										{val.groupName}
									</option>
								);
							})}
						</select>
					</label>
					<input onClick={handleSubmit} className="main-form-show-submit" type="submit" value="Add" />
				</form>
			</div>
		</main>
	);
}

export default Main;
