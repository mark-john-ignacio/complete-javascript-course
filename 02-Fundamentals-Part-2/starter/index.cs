class Program
{
    public static void Main(string[] args)
    {
        Thread t1 = new Thread(Run);
        Thread t2 = new Thread(Run);
        t1.Start();
        Console.Write("one. ");
        t2.Start();
        Console.Write("two. ");
    }
    
    public static void Run()
    {
        Console.Write("Thread. ");
    }
}

A. i = 0
B. i = i + 2
C. box[i] = box[i] + box[i]
D. if (box[1] < box[i])
    go back to B
    else{
        end
    }

    //what is the smallest number which may be in box 1 to double the number in box 2, 4, 6, 8, 10. The value of the boxes corresponds to the index of the box except for box 1.

box 1: 5
box 2: 10
box 3: -2
box 4: ?
box 5: 3
box 6: 8
box 7: 6
box 8: 7
box 9: 3
box 10: 1
A. box[3]  = box[1] - box[1]
B. j = 9 
D. box[3] = box[3] + box[j]
E. is box[4] > j ?
    if yes, end
    else{
        j = j - 1
        go back to D
    }

    //purpose is to add the numbers is boxes 6,7,8,9 and put the total in box 3. IN order to accomplish exactly this what is the smallest number which may be in box 4


box 1: 1
box 2: 2
box 3: 0
box 4: 3
box 5: 7
box 6: 5
box 7: 24
box 8: 7
box 9: 11
box 10: 6
box 11: 1
box 12: 5
box 13: 4
box 14: 8

A. box[11] = box[3] + box[11]
B. box[5] = box[1] + box[box[9]]
C. box[4] = box[4] * box[4]
E. if box[5] = box[10]
    go to G
    else{
        go to F
    }
F. box[4] = box[4] - 6, go to D
D. box[5] = box[5] + box[2], go back to C

G. box[8] = box[7] - box[5]
H. box[6] = box[8] + box[4]

// What number is in box 6 after the program is run?

computer lab 6 programmers sit on a round table. Each programmer has a favorite language. The languages are C++, Java, Python, Perl, C#, Assembly Language. The guy who likes C# sits directly to the right of Jimmy. Justin sits between the two people who prefer Perl and C#. NO one sits between Sarah and Susan. Susan directly sits to the left of the guy who likes Python. The guy who prefers Java does not sit next to a girl. Susan hates Assembly Language. James does not sit next to a girl. John does not sit next to the girl who prefers Perl.

WHo sits directly on the right of Susan?

Who sits directly on the left of John?

Who sits directly on the left of James?

Who sits directly on the right of John?