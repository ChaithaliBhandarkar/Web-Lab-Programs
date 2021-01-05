<html>
    <head>
        <style>
            table {
                margin:auto;
                background-color:silver;
                align:center;
            }
            input,p {
                text-align:right;
            }
        </style>
    </head>
    <body>
        <form method="post" action="Lab Program 8a.php">
            <table>
            <caption><h2>SIMPLE CALCULATOR</h2></caption>
            <tr>
                <td>First Number:</td><td><input type="text" name="n1"/></td>
                <td rowspan="2"><button type="submit" name="submit" value="calculate">Calculate</td></tr>
            <tr>
                <td>Second Number:</td><td><input type="text" name="n2"/></td>
                <td rowspan="2"><input type="reset" name="clear" value="clear"></td>
            </tr>
        </form>
        <?php
        if(isset($_POST['submit']))
        {
            $n1=$_POST['n1'];
            $n2=$_POST['n2'];
            if(is_numeric($n1) and is_numeric($n2))
            {
                echo "<tr><td> Addition :</td><td><p>".($n1+$n2)."</p></td>";
                echo "<tr><td> Subtraction :</td><td><p>".($n1-$n2)."</p></td>";
                echo "<tr><td> Multiplication :</td><td><p>".($n1*$n2)."</p></td>";
                echo "<tr><td> Division :</td><td><p>".($n1/$n2)."</p></td>";
                echo "</table>";
            }
            else{
                echo"<script>alert('Enter valid number');</script>";
            }
        }
        ?>
</body>
</html>