
function calculateExperience()
{
	const joiningDate = new Date(2016, 1, 26)
	const currentDate = new Date()
	var startMonth = joiningDate.getFullYear() * 12 + joiningDate.getMonth();  
	var endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
	var monthInterval = (endMonth - startMonth);

	var yearsOfExperience = Math.floor (monthInterval / 12);
	var monthsOfExperience = monthInterval % 12;

	var monthSuffix = monthsOfExperience == 1 ? " month" : " months";
	var message = yearsOfExperience + " years and " + monthsOfExperience + monthSuffix;
	return message;
}