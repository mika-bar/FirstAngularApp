
export class MessageShow {
	public TITLE: string;
	public SUBTITLE: string;
	public BUTTON: string;


	constructor($TITLE: string, $SUBTITLE: string, $BUTTON = null) {
		this.TITLE = $TITLE;
		this.SUBTITLE = $SUBTITLE;
		this.BUTTON = $BUTTON;
	}
}
