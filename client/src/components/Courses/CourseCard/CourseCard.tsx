// UI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Animations
import { motion } from "framer-motion";

// Routing
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  course: ICourse;
}

// TODO: remove all placeholders and implement this
function CourseCard(props: CourseCardProps) {
  let navigate = useNavigate();

  // when a user clicks on the card, navigate to the course page
  const navigateToCourse = (course: ICourse) => {
    navigate(`/courses/${course.Name}`, { state: { course: course } });
  };

  return (
    <motion.div
      style={{ maxWidth: 345 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigateToCourse(props.course)}
      layoutId={props.course.Name} // this prop is used for the animation
    >
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200/300"
          alt="placeholder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.course.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Put some text here
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">action1</Button>
          <Button size="small">action2</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default CourseCard;
