import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			ifClickEvent: 0,
			ifClickGroup: 0,
			groupNameInput: "",
			eventHeader: "",
			eventContent: "",
			eventTags: "2",
			eventDate: "",
			eventGroupName: "Bootcamp",

			groups: [
				{
					groupId: 1,
					groupName: "BootCamp",
					cards: [
						{
							header: "Home-Work",
							text: "Time and tide wait for none",
							date: "29-06-2020",
							tags: 1,
						},
					],
				},
				{
					groupId: 2,
					groupName: "Post-Grad",
					cards: [
						{
							header: "E-conference",
							text: "Attend at the right time",
							date: "25-10-2010",
							tag: 2,
						},
					],
				},
				{
					groupId: 3,
					groupName: "Eid",
					cards: [
						{
							header: "Bayram",
							text: "Prepare for Eid-Ul-Azha",

							date: "30-07-2020",
							tag: 3,
						},
					],
				},
			],
		};
		this.showForm = this.showForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.addGroup = this.addGroup.bind(this);
	}

	handleSubmit(e) {
		const { groups } = this.state;
		const { eventHeader, eventContent, eventDate, eventTags, eventGroupName } = this.state;
		let index;
		groups.map((val, i) => {
			if (val.groupName === eventGroupName) {
				index = i;
			}
		});
		//Immutable
		const oldCard = groups[index].cards;
		const newCard = {
			header: eventHeader,
			text: eventContent,
			imgSrc: "",
			date: eventDate,
			tag: eventTags,
		};
		// Immutable
		oldCard.push(newCard);
		console.log(oldCard);
		this.setState({
			groups,
			eventHeader: "",
			eventContent: "",
			eventDate: "",
			eventTags: 2,
			eventGroupName: "Okul",
			ifClickEvent: 0,
		});
		e.preventDefault();
	}

	addGroup(e) {
		// const { name, value } = e.target;
		const { groups, groupNameInput } = this.state;
		let lastGroup = groups[groups.length - 1];
		const newGroupId = lastGroup.groupId + 1;
		const newGroups = {
			groupId: newGroupId,
			groupName: groupNameInput,
			cards: [],
		};
		// ToDo Immutable
		groups.push(newGroups);
		this.setState({ groups, groupNameInput: "", ifClickGroup: 0 });
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	showForm(e) {
		console.log(e.target.name);
		const { name } = e.target;
		const { ifClickEvent, ifClickGroup } = this.state;
		let val;
		if (name === "ifClickEvent") {
			console.log("value ifClickE");
			val = ifClickEvent;
		} else if (name === "ifClickGroup") {
			console.log("else if");
			val = ifClickGroup;
		}
		this.setState({ [name]: !val });
	}

	render() {
		//console.log((I.Map(this.state.groups2.get(2)).set('groupIda','asd')).toJS());
		const { groups, ifClickEvent, eventContent, eventDate, eventHeader, eventTags, ifClickGroup, groupNameInput } = this.state;
		return (
			<div className="App">
				<Navbar showForm={this.showForm} />
				<Main
					groupNameInput={groupNameInput}
					ifClickEvent={ifClickEvent}
					ifClickGroup={ifClickGroup}
					groups={groups}
					eventContent={eventContent}
					eventDate={eventDate}
					eventHeader={eventHeader}
					eventTags={eventTags}
					addGroup={this.addGroup}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default App;
