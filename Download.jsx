import React from 'react';

const Download = () => {
    return (
        <>

<div id="header">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<h1 id="logo">Logo</h1>
				</div>

				<div className="col-md-8">
					<ul id="menu" className="float-md-rigth">
						<li><a href="web.html">Home</a></li>
						<li><a href="web.html">About us</a></li>
						<li><a href="">Games</a></li>
						<li><a href="">Movies</a></li>
						<li><a href="">Pricing</a></li>
						<li><a href="">Download</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>



<div className="container">
	<div className="row-md-8">
		<h1 className="text-center">Download</h1>
	</div>

	<img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/20180131_Play_Store_Logo.png  " width="300px" height="300px" style="margin-left: 500px;"/>

		<div className="row-md-8 text-center">
		 <button type="button" className="btn btn-danger mt-4 btn-lg opacity-25">Download</button>
		</div>
</div>






<div className="row-md-12 bg-light text-dark text-center mt-5" style="height: 100px;">
			<h4>Copyright 2021</h4>
		</div>


        </>
    );
};

export default Download;