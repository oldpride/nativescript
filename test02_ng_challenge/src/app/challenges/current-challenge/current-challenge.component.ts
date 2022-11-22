import { Component } from '@angular/core';

@Component ({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css'],
  moduleId: module.id, // this is not required in new ns any more
})
export class CurrentChallengeComponent {
  challengeDescription = '';

  currentChallenge = '';

  onSetChallenge () {
    this.currentChallenge = this.challengeDescription;
  }
}
