<?

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // Yazı ekleme
    public function store(Request $request)
    {
        // Validasyon kuralları
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048', // Görsel yükleme için
        ]);

        // Görsel yükleme işlemi
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public'); // 'public' diskine kaydediyor
        }

        // Yeni yazıyı oluştur
        $post = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imagePath,
        ]);

        return response()->json($post, 201);
    }

    // Tüm yazıları listeleme
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }
}