import * as React from 'react';
import {ButtonGroup, Button, Col, Row} from 'react-bootstrap';
import {CSSProperties} from "react";

const filterStyle: CSSProperties = {
    marginRight: "30px"
};

type ProblemsFilterProps = {
    changeFilter: (filter: number) => void,
    filter: number,
    onHideDoneProblems: (hide: boolean) => void,
    hideDoneProblems: boolean,
    problemsCount: number,
    onShowNumberOfProblems: () => void
}
const ProblemsFilter = (props: ProblemsFilterProps) => (
    <Row>
        <Col md={11}>
            <ButtonGroup className="pull-right" style={filterStyle} bsSize="large">
                <Button onClick={() => props.changeFilter(1)} active={props.filter === 1}>Easy</Button>
                <Button onClick={() => props.changeFilter(2)} active={props.filter === 2}>Medium</Button>
                <Button onClick={() => props.changeFilter(3)} active={props.filter === 3}>Hard</Button>
                <Button onClick={() => props.changeFilter(0)} active={props.filter === 0}>All</Button>
            </ButtonGroup>
            <ButtonGroup className="pull-right" style={filterStyle} bsSize="large">
                <Button onClick={() => props.onHideDoneProblems(true)} active={props.hideDoneProblems}>Todo</Button>
                <Button onClick={() => props.onHideDoneProblems(false)} active={!props.hideDoneProblems}>All</Button>
            </ButtonGroup>
        </Col>
    </Row>
);

export default ProblemsFilter;