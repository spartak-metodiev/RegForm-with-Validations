window.onload = function () {
	var step1 = document.getElementById( 'step-1' )
		step2 = document.getElementById( 'step-2' ),
		step3 = document.getElementById( 'step-3' );

	function attachEventListenersToArray ( elementsArray, eventName, handler ) {
		for( var i = 0; i < elementsArray.length; i++ ) {
			elementsArray[ i ].addEventListener( eventName, handler );
		}
	}

	function hasEmptyFields ( stepContainer ) {
		var hasEmptyInputsResult = hasEmptyInputs( stepContainer ),
			hasEmptySelectFieldsResult = hasEmptySelects( stepContainer );

		return ( hasEmptyInputsResult || hasEmptySelectFieldsResult )
	}

	function hasEmptyInputs ( stepContainer ) {
		var hasEmptyInputsResult = false,
			inputFields = stepContainer.querySelectorAll( 'input' );

		for( var i = 0; i < inputFields.length; i++ ) {
			if( inputFields[ i ].value === '' ) {
				inputFields[ i ].style.borderColor = 'red';
				hasEmptyInputsResult = true;
			}
		}

		return hasEmptyInputsResult;
	}


	function hasEmptySelects ( stepContainer ) {
		var hasEmptySelectFieldsResult = false,
			selectFields = stepContainer.querySelectorAll( 'select' );

		for( var i = 0; i < selectFields.length; i++ ) {

			if( selectFields[ i ].value === '' ) {

				selectFields[ i ].style.borderColor = 'red';
				hasEmptySelectFieldsResult = true;
			}

		}

		return hasEmptySelectFieldsResult;
	}

	function hideOtherFormSteps() {
		step2.style.display = 'none';
		step3.style.display = 'none';
	}

	hideOtherFormSteps();

	var goToStepTwoButtons = document.getElementsByClassName( 'go-to-step-2-button' ),
		goToStepOneButtons = document.getElementsByClassName( 'go-to-step-1-button' ),
		goToStepThreeButtons = document.getElementsByClassName( 'go-to-step-3-button' ),
		allInputs = document.getElementsByTagName( 'input' ),
		allSelects = document.getElementsByTagName( 'select' );


	attachEventListenersToArray( allInputs, 'focus', function ( e ) {
		this.style.borderColor = '#ccc';
	});
	attachEventListenersToArray( allSelects, 'focus', function ( e ) {
		this.style.borderColor = '#ccc';
	});

	attachEventListenersToArray( goToStepTwoButtons, 'click', function ( e ) {
		e.preventDefault();

		if( !hasEmptyFields( this.parentElement ) ) {
			this.parentElement.style.display = 'none';
			step2.style.display = 'block';
		}
	});

	attachEventListenersToArray( goToStepOneButtons, 'click', function ( e ) {
		e.preventDefault();

		if( !hasEmptyFields( this.parentElement ) ) {
			this.parentElement.style.display = 'none';
			step1.style.display = 'block';
		}
	});

	attachEventListenersToArray( goToStepThreeButtons, 'click', function ( e ) {
		e.preventDefault();

		if( !hasEmptyFields( this.parentElement ) ) {
			this.parentElement.style.display = 'none';
			step3.style.display = 'block';
		}
	});


	var passwordStrengthIndicator = document.getElementById( 'password-strength-indicator' ),
		passwordField = document.getElementById( 'password' );

	passwordField.addEventListener( 'keypress', function () {
		if( this.value.length === 0 ) {
			passwordStrengthIndicator.style.background = 'white';
			passwordStrengthIndicator.style.color = 'black';

			passwordStrengthIndicator.innerHTML = 'No password';

		}
		else if( this.value.length < 5 ) {
			passwordStrengthIndicator.style.background = 'red';
			passwordStrengthIndicator.style.color = 'white';

			passwordStrengthIndicator.innerHTML = 'Weak password';
		}
		else if ( this.value.length < 10 ) {
			passwordStrengthIndicator.style.background = 'yellow';
			passwordStrengthIndicator.style.color = 'black';

			passwordStrengthIndicator.innerHTML = 'Average password';
		}
		else {
			passwordStrengthIndicator.style.background = 'green';
			passwordStrengthIndicator.style.color = 'white';

			passwordStrengthIndicator.innerHTML = 'Strong password';
		}
	});


};