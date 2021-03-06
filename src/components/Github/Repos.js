import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({repos}) => {
	return (
		<div className="col-md-8">
			<h3> User Repos </h3>
			<ul className="list-group">
				{repos.map((repo, index) => {
					return (
						<li className="list-group-item" key={repo.name}>
							{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
							{repo.description && <p>{repo.description}</p>}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

Repos.propTypes = {
	repos: PropTypes.array.isRequired
}

export default Repos