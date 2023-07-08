import { Component, OnInit } from '@angular/core';

@Component({
  selector: 's-learning-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {

  tabItems: TabItem[] = [
    { title: 'User', route: 'user' },
    { title: 'Grammar Topics', route: 'grammar-topic' },
    { title: 'Vocab Topics', route: 'vocab-topic' }
  ];
  activeTab!: TabItem;

  ngOnInit(): void {
    this.activeTab = this.tabItems[0]; // Thiết lập activeTab là tab "User"
  }

  setActiveTab(tab: TabItem): void {
    this.activeTab = tab;
  }
}

interface TabItem {
  title: string;
  route: string;
}
