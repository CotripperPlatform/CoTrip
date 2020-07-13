import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import InputTextField from "../../components/InputTextField/InputTextField";
import TextField from '@material-ui/core/TextField';

import Button from '../Button/Button';
import { getSocialMediaOptions, updateSocialMediaList, submitUserUpdates } from '../../services/Members';
import InputAdornment from '@material-ui/core/InputAdornment';

import axios from 'axios';
import { BASE_URL } from '../../services/constants';

// const Bio = props => {
class Bio extends Component {
	constructor() {
		super();
		this.state = {
			editMode: false,
			form_first_name: '',
			form_last_name: '',
			form_bio: '',
			form_social_media: '',
			socialMediaOptions: [],
		}

		this.getSocialMediaOptions = getSocialMediaOptions.bind(this);
		this.updateSocialMediaList = updateSocialMediaList.bind(this);
		this.submitUserUpdates = submitUserUpdates.bind(this);

	}

	toggleEditMode = () => {
		this.setState({
			editMode: !(this.state.editMode)
		})
	}

	updateFirstName = (event) => {
		let first_name = event.target.value;
		this.setState({
			form_first_name: first_name
		});
	}

	updateLastName = (event) => {
		let last_name = event.target.value;
		this.setState({
			form_last_name: last_name
		});
	}

	updateBio = (event) => {
		let bio = event.target.value;
		this.setState({
			form_bio: bio
		});
	}

	logForm = () => console.log(...this.state);

	componentDidMount() {
		this.getSocialMediaOptions()
		this.setState({
			form_first_name: this.props.first_name,
			form_last_name: this.props.last_name,
			form_bio: this.props.bio,
			form_social_media: this.props.social_media,
		})
	}



	render() {
		let userBio = '';
		let firstName = '';
		let lastName = '';
		if (this.state.updated_first_name !== undefined) {
			if (this.props.first_name === this.state.updated_first_name)
				firstName = this.props.first_name;
			else
				firstName = this.state.updated_first_name;
		}
		else {
			firstName = this.props.first_name;
		}

		if (this.state.updated_last_name !== undefined) {
			if (this.props.last_name === this.state.updated_last_name)
				lastName = this.props.last_name;
			else
				lastName = this.state.updated_last_name;
		}
		else {
			lastName = this.props.last_name;
		}

		if (this.state.updated_bio !== undefined) {
			if (this.props.bio === this.state.updated_bio)
				userBio = this.props.bio;
			else
				userBio = this.state.updated_bio;
		}
		else {
			userBio = this.props.bio == undefined ? '' : this.props.bio;
		}

		let userSocialMediaLinks = !this.state.form_social_media ? "" :
			this.state.form_social_media.map((mediaType, index) => {
				return (
					<a href={mediaType.url} target='_blank' >
						<Icon onClick={this.props.onClick} icon={["fab", mediaType.social_media_type.name.toLowerCase()]} key={mediaType.index} />
					</a>
				)
			})

		if (this.state.editMode === true) {

			return (
				<div className={"Bio"}>
					<div>
						{/* <h3>Editing..</h3> */}
						<h2 className={"Bio__header"}>
							<InputTextField
								name="first_name"
								type="text"
								placeholder='First name'
								defaultValue={firstName}
								onChange={this.updateFirstName}
							// loadcallback={this.updateFirstName}
							/> &nbsp;
          					<InputTextField
								name="last_name"
								type="text"
								placeholder='Last name'
								defaultValue={lastName}
								onChange={this.updateLastName}
							/> &nbsp;
              				{this.props.isCurrentUser ? <Icon callback={this.toggleEditMode} icon={"edit"} /> : null}
						</h2>

						<div className="Bio__paragraph">
							<TextField
								id="outlined-multiline-static"
								label="Bio"
								fullWidth={true}
								multiline
								rows={4}
								defaultValue={userBio}
								variant="outlined"
								onChange={this.updateBio}
							/>

							<a onClick={this.logForm}>Log Vals</a>
							<br />
							<div className="icons__div-edit ">
								{!this.state.socialMediaOptions ? "" :
									this.state.socialMediaOptions.map(mediaType => {
										return (
											<div className='icons__div-edit__media-entry-container'>
												<TextField
													fullWidth={true}
													label={`${mediaType.name} Username`}
													size="small"
													rows={1}
													defaultValue={""}
													variant="outlined"
													onChange={e => this.updateSocialMediaList(e, mediaType.id)}
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																<Icon icon={["fab", mediaType.name.toLowerCase()]} />
															</InputAdornment>
														),
													}}
												/>
											</div>
										)
									})
								}
							</div>
							<br />
							<Button text="Submit" color="pink" size="small" handleClick={this.submitUserUpdates} />


						</div>
						<h3 className="Bio__interests">Interests</h3>
						<div className="hashtag__container">
							{this.props.hashtags.map(hashtag => (
								<span className="Bio__span" key={hashtag + 1}>
									{hashtag}
								</span>
							))}
						</div>

					</div>
				</div>
			);
		}
		else {
			return (
				<div className={"Bio"}>
					<div>
						<h2 className={"Bio__header"}>
							{firstName} {lastName[0] + "."}
							{this.props.isCurrentUser ? <Icon callback={this.toggleEditMode} icon={"edit"} /> : null}
						</h2>


						<h3 className="Bio__subheader">Bio </h3>

						<p className="Bio__paragraph">{userBio}</p>
						<h3 className="Bio__interests">Interests</h3>
						<div className="hashtag__container">
							{this.props.hashtags.map(hashtag => (
								<span className="Bio__span" key={hashtag + 1}>
									{hashtag}
								</span>
							))}
						</div>
						<div className="icons__div">
							{userSocialMediaLinks}
						</div>
					</div>
				</div>
			);



		}
	}
};

export default Bio;
