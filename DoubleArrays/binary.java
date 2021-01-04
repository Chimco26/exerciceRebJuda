public class binary {
    public static void main(String[] args) {
        int[] arr = { 2, 5, 8, 9, 19, 20 };

        int b = 18;
        System.out.println(Binary(arr, b, 0, arr.length - 1));

    }

    public static int Binary(int[] arr, int x, int start, int len) {
        int mid = (start + len) / 2;

        if (arr[mid] == x)
            return mid;
        else if (start >= len)
            return -1;
        else if (arr[mid] < x)
            return Binary(arr, x, mid + 1, len);
        else
            return Binary(arr, x, start, mid - 1);
    }
}
