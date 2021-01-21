<?php 
if(isset($_POST['submit'])){
    $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
    $job = htmlspecialchars(stripslashes(trim($_POST['job'])));
    $email = htmlspecialchars(stripslashes(trim($_POST['email'])));
    $phone = htmlspecialchars(stripslashes(trim($_POST['phone'])));
    $brand = htmlspecialchars(stripslashes(trim($_POST['brand'])));
    $property = htmlspecialchars(stripslashes(trim($_POST['property'])));
    $location = htmlspecialchars(stripslashes(trim($_POST['location'])));
    $rooms = htmlspecialchars(stripslashes(trim($_POST['rooms'])));
    $existing = htmlspecialchars(stripslashes(trim($_POST['existing'])));
    $contact = htmlspecialchars(stripslashes(trim($_POST['contact'])));
    $subscribe = htmlspecialchars(stripslashes(trim($_POST['subscribe'])));
    $message = "name: " . $name;
    $message = $message . "\njob: " . $job;
    $message = $message . "\nemail: " . $email;
    $message = $message . "\nphone: " . $phone;
    $message = $message . "\nbrand: " . $brand;
    $message = $message . "\nproperty: " . $property;
    $message = $message . "\nlocation: " . $location;
    $message = $message . "\nrooms: " . $rooms;
    $message = $message . "\nexisting: " . $existing;
    $message = $message . "\ncontact: " . $contact;
    $message = $message . "\nsubscribe: " . $subscribe;
}
if(isset($_POST['submit']) && isset($message) && isset($name) && isset($job) && isset($email) && isset($phone) && isset($brand) && isset($property) && isset($property) && isset($rooms)) {
    if(mail("jadeallencook@gmail.com", "Response From DirectKey Website", $message)){
        echo '<p style="color: green; margin-top: 25px;">Message sent!</p>';
    } else{
        echo '<p style="color: red; margin-top: 25px;">Error occurred, please try again later...</p>';
    }
} else {
    echo '<p style="color: red; margin-top: 25px;">Error occurred, please try again later...</p>';
}
?>

<br />

<a href="http://directkey.onity.com/">Click here to return to homepage.</a>