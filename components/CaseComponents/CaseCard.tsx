import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { useMutation, useQuery } from "urql";
import { Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

type CaseCardProps = {
  data: CaseData;
};

export type CaseData = {
  name: string;
  status: string;
  description: string;
  id: number;
};

const DeleteCaseMutation = `mutation MyMutation($id: bigint = "") {
  delete_cases_by_pk(id: $id) {
    id
  }
}`;


//const [result, executeMutation] = useMutation(DeleteCaseMutation);

const CaseCard: React.FC<CaseCardProps> = (props) => {
  const caseData = props.data;

  return (
    <Container>
      <div style={{ width: "100%", padding: "5px" }}>
        <Card body style={{ backgroundColor: "#e4ebf5" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <CardTitle tag="h3">{caseData.name}</CardTitle>
            <CloseIcon 
            />
          </Box>

          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {caseData.status}
          </CardSubtitle>
          <CardText>{caseData.description}</CardText>
        </Card>
      </div>
    </Container>
  );
};
export default CaseCard;
