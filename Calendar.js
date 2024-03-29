import { LightningElement, track } from 'lwc';

export default class Calendar extends LightningElement {
    //@track currentDate = new Date();
    @track year = '2024';
    @track monthName = 'MARCH';
    finalCalendar = [];
    holidayList = new Map();
    monthStartFrom;
    @track sixthRow = true;
    @track Row1 =[];
    @track Row2 =[];
    @track Row3 =[];
    @track Row4 =[];
    @track Row5 =[];
    @track Row6 =[];

    connectedCallback() {
        this.buildCalander();
    }

    buildCalander(){
        this.holidays();

        for(let i=1;i<=31;i++){
            let ele = {value: i,
                   holiday: ' ',
                   style: ""};

            if(this.holidayList.has(i.toString())){
                ele.holiday = this.holidayList.get(i.toString())
                ele.style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
            }else{
                ele.style = "text-align: center; color: blue; border: 1px solid black; padding-bottom: 20px;";
            }
            this.finalCalendar.push(ele);
        }
        
        this.monthStartFrom = 6;
        this.buildRow();
    }

    buildRow(){
        let ele = {value: ' ',
                holiday: ' ',
                style: "text-align: center;  border: 1px solid black; padding-bottom: 20px;"};

        for(let i=0;i<this.monthStartFrom-1;i++){
            this.Row1.push(ele);
        }

        let j=0;
        while (this.Row1.length<7){
            if(this.Row1.length == 0){
                this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
            }
            this.Row1.push(this.finalCalendar[j]);
            j++;
        }
        console.log('size of row 1',this.Row1.length);
        while (this.Row2.length<7){
            if(this.Row2.length == 0){
                this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
            }
            this.Row2.push(this.finalCalendar[j]);
            j++;
        }
        console.log('size of row 2',this.Row2.length);
        while (this.Row3.length<7){
            if(this.Row3.length == 0){
                this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
            }
            this.Row3.push(this.finalCalendar[j]);
            j++;
        }
        console.log('size of row 3',this.Row3.length);
        while (this.Row4.length<7){
            if(this.Row4.length == 0){
                this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
            }
            this.Row4.push(this.finalCalendar[j]);
            j++;
        }
        console.log('size of row 4',this.Row4.length);
        while (this.Row5.length<7){
            if(j<(this.finalCalendar.length)-1){
                if(this.Row5.length == 0){
                    this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
                }
                this.Row5.push(this.finalCalendar[j]);
            }else{
                this.Row5.push(ele);
                this.sixthRow = false;
            }
            j++;
        }
        console.log('size of row 5',this.Row5.length);
        if(this.sixthRow == true){
            while (this.Row6.length<7){
                if(j<(this.finalCalendar.length)){
                    if(this.Row6.length == 0){
                        this.finalCalendar[j].style = "text-align: center; color: red; border: 1px solid black; padding-bottom: 20px;";
                    }
                    this.Row6.push(this.finalCalendar[j]);
                }else{
                    this.Row6.push(ele);
                }
                j++;
            }
            console.log('size of row 6',this.Row6.length);
        }
        
    }

    holidays(){
        this.holidayList.set('8','Mahashivratri');
        this.holidayList.set('25','Holi');
        this.holidayList.set('29','Good Friday');   
    }
    
}
