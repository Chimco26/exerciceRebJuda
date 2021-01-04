public class palindrom {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 2, 1, 2, 3 };
        int total = 0;

        for (int i = 0; i < arr.length; i++) {
            total += Palindrom(arr, i, i + 1);
            total += Palindrom(arr, i, i + 2);
        }

        System.out.print(total);

    }

    public static int Palindrom(int[] arr, int x, int y) {
        int sum = 0;

        if (y >= arr.length || x < 0 || arr[x] != arr[y]) {
            return sum;
        } else {
            sum++;
            return sum + Palindrom(arr, x - 1, y + 1);
        }
    }

}