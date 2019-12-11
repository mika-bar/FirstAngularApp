import { MessageShow } from '../models/messageShow';

/**
 * Set all messages to show in one place.
 */

//#region Confirm Messages

export const BarRemoveMessage: MessageShow = new MessageShow(
	'Are you sure?',
	'All the workers will be removed from the event, and the bar will be deleted',
	'Remove'
);

export const UserRemoveMessage: MessageShow = new MessageShow(
	'Are you sure?',
	'The worker will be removed from the event',
	'Remove'
);

export const UserMakeManagerMessage: MessageShow = new MessageShow(
	'Are you sure?',
	'The worker privileges will be set to manager',
	'Confirm'
);

export const EventRemoveMessage: MessageShow = new MessageShow(
	'Are you sure?',
	'All the workers will be removed from the event, and all the data of the event will be deleted.',
	'Remove'
);

export const EventDoneMessage: MessageShow = new MessageShow(
	'Event Completed',
	'The status of the event will be changed to done.',
	'Confirm'
);

export const ShowReportEventNotDoneMessage: MessageShow = new MessageShow(
	'Event Not Completed',
	'Reports are available only for completed events.',
	'Confirm'
);

export const RemoveUserFromBar: MessageShow = new MessageShow(
	'Are you sure?',
	'The worker will be removed from the bar.',
	'Remove'
);

//#endregion


//#region Success Messages

export const UserRemovedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user has been removed',
);

export const UserUpdatedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user has been updated',
);
export const ManagerUpdatedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The manager has been updated',
);

export const ManagerPrivilegesSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The manager privileges have been removed',
);

export const EventRemovedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The event has been removed',
);

export const BarRemovedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The bar has been removed',
);


export const UserRemoveFromBarSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user have been removed from the Bar',
);

export const EventStatusSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The event status is changed',
);

export const PushNotificationSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The notification has been sent to all the users',
);

export const UserMadeManagerSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user selected is now a manager',
);
export const UserRemovedFromBarSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user has been removed from the event',
);
export const UserMovedBarSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user have been moved to another bar',
);
export const BarUpdatedSuccess: MessageShow = new MessageShow(
	'Action Completed',
	'The user have been moved to another bar',
);

//#endregion


//#region Error Message
export const ServerError: MessageShow = new MessageShow(
	'Server Error',
	'Please contact Support',
);

export const LoginError: MessageShow = new MessageShow(
	'Login Failed',
	'Username or password are incorrect',
);
//#endregion
