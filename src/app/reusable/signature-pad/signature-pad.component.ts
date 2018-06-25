import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.css']
})
export class SignaturePadComponent implements OnInit {

  @Input() container;
  @Input() signature = []
  @Input() disabled = false;

  private width;
  private height;

  private host;
  private svg;
  private renderSpace;

  private activeColor = '#000000';
  private lineRenderer;
  private draw;
  private activeLine = null;

  @Output() submitSignature: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if (this.signature===undefined || this.signature===null) this.signature = [];
    if (this.container!==undefined) {
      this.width = Math.floor(this.container.width);
      this.height = Math.floor(this.container.height);

      this.host = d3.select(this.elementRef.nativeElement).select('.signature-container');
      this.svg = this.host.select('svg')
        .attr('width', this.width+'px').attr('height', this.height+'px');

      this.renderSpace = this.svg.append('g').attr('class', 'render-sapce');
      this.lineRenderer = d3.line().x(d=>d[0]).y(d=>d[1]).curve(d3.curveLinear);

      if (!this.disabled) this.setup();
      this.renderSignature();
    }
  }

  setup() {
    this.draw = d3.drag();
    this.draw.on('start', ()=>{
      this.activeLine = {color: this.activeColor, points: []};
    });
    this.draw.on('drag', ()=>{
      this.activeLine.points.push([d3.event.x, d3.event.y]);
      this.drawSignature(this.activeLine);
    });
    this.draw.on('end', ()=>{
      if (this.activeLine.points.length>0) {
        this.signature.push(this.activeLine);
        this.activeLine = null;
        this.submitSignature.emit(this.signature);
      }
    });
    this.svg.call(this.draw);

    let colors = ['#000000', 'red', 'green', 'blue'];
    this.svg.selectAll('rect.swatch').data(colors).enter().append('rect').attr('class', 'swatch')
      .classed('active', d=>d===this.activeColor)
      .attr('y', (d,i)=>i*this.height/colors.length).style('fill', d=>d)
      .attr('width', 0.03*this.width).attr('height', 0.8*this.height / colors.length)
      .on('click', d=>{
        this.activeColor = d;
        this.svg.selectAll('rect.swatch').classed('active', k=>k===this.activeColor);        
      });
    this.host.select('.trash-btn').on('click', ()=>{
      this.deleteSignature();
    });
  }

  drawSignature(line=null) {
    if (line!==null) {
      let index = this.signature.length,
          thisLine = this.renderSpace.select('.line'+index);
      if (thisLine.empty()) {
        thisLine = this.renderSpace.append('path').attr('class', 'line line'+index)
          .style('stroke', line.color).style('fill', 'none');
      }
      thisLine.attr('d', this.lineRenderer(line.points));
    }
  }
  deleteSignature() {
    this.signature = [];    
    this.renderSpace.selectAll('.line').remove();
    this.submitSignature.emit(this.signature);
  }
  renderSignature() {
    if (this.signature.length > 0) {
      this.renderSpace.selectAll('.line').data(this.signature).enter().append('path')
        .attr('class', (d,i)=>'line line'+i).style('stroke', d=>d.color)
        .style('fill', 'none')
        .attr('d', d=>this.lineRenderer(d.points));
    }
  }

}
