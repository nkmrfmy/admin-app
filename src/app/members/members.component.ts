import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {

  members = MEMBERS;
  selectedMember: Member;

  member: Member = {
    id: 1,
    name: '田中太郎',
  };
  constructor() {}
  // componentが初期化されるときに実行されるメソッド
  ngOnInit(): void {}
  // クリックイベント
  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
